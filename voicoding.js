const express = require('express');
const multer = require('multer');
const fs = require('fs');
const upload = multer();
const app = express(); 
const port = 5500;
app.use(express.static('Voicoding_web'));
app.use(express.static('./'));
async function testGoogleTextToSpeech(audioBuffer) {
    const speech = require('@google-cloud/speech');
    const client = new speech.SpeechClient();
    const audio = {
    content: audioBuffer.toString('base64'),
    };
    const encoding = 'LINEAR16';
    const sampleRateHertz = 48000;
    const languageCode = 'ko-KR';
    const speechContexts = [{
        phrases: [
        '$$OOV_CLASS_ALPHANUMERIC_SEQUENCE 는 $OOV_CLASS_ALPHANUMERIC_SEQUENCE',
        '$OOV_CLASS_ALPHANUMERIC_SEQUENCE 는 $OOV_CLASS_ALPHANUMERIC_SEQUENCE 보다 크다',
        '$OOV_CLASS_ALPHANUMERIC_SEQUENCE 는 $OOV_CLASS_ALPHANUMERIC_SEQUENCE 보다 작다',
        '$OOV_CLASS_ALPHANUMERIC_SEQUENCE 는 $OOV_CLASS_ALPHANUMERIC_SEQUENCE 와 같다',
        '$OOV_CLASS_ALPHANUMERIC_SEQUENCE 는 $OOV_CLASS_ALPHANUMERIC_SEQUENCE 보다 작거나 같다',
        '$OOV_CLASS_ALPHANUMERIC_SEQUENCE 는 $OOV_CLASS_ALPHANUMERIC_SEQUENCE 보다 크거나 같다',
        '반복문 선언 for $OOV_CLASS_ALPHA_SEQUENCE in range',
        '반복문 선언 for $OOV_CLASS_ALPHA_SEQUENCE in',
        '$$OOV_CLASS_ALPHANUMERIC_SEQUENCE 는 빈 리스트',
        '$$OOV_CLASS_ALPHANUMERIC_SEQUENCE 는 숫자 리스트 $OOV_CLASS_ALPHANUMERIC_SEQUENCE',
        '$$OOV_CLASS_ALPHANUMERIC_SEQUENCE 는 문자 리스트 $OOV_CLASS_ALPHANUMERIC_SEQUENCE',
        'if',
        '이프',
        'else if',
        '엘스 이프',
        'else',
        '엘스',
        'while',
        '와일',
        '함수',
        '파라미터 선언',
        'parameter',
        '변수 선언',
        '함수 선언',
        '반복문 선언 while',
        '반복문 선언 와일',
        '조건문 선언',
        '논리 식 선언',
        '기본 함수 사용',
        '인풋',
        '스플릿',
        '프린트',
        '섬',
        '맥스',
        '민',
        '렌',
        '리턴',
        '리스트'
        ],
        boost: 20
    }]

    const request = {
        audio: audio,
        config: {
            encoding: encoding,
            sampleRateHertz: sampleRateHertz,
            languageCode: languageCode,
            alternativeLanguageCodes: ['en-US'],
            speechContexts: speechContexts
        },
        interimResults: false, // If you want interim results, set this to true
    };
    const [response] = await client.recognize(request);
    const transcription = response.results
    .map(result => result.alternatives[0].transcript);
    return transcription;
}

let before_val = '';
async function TextToPython(trans_data, tab) {
    let text_list = trans_data.split(' ');
    console.log(text_list);
    switch (text_list[0]){
        case '기본':
            before_val = '기본';
            switch (text_list[3]){
                case '프린트':
                    return  tab + 'print(';
                case '인풋': 
                    return  'input()\n';
                case '섬':
                    return 'sum(';
                case '맥스':
                    return 'max(';
                case '민':
                    return 'min(';
                case '렌':
                    return 'len(';
                case '수식':
                    return text_list.slice(4).join(' ') + '\n';
                default: return '';
                }
        case '파라미터':
            if (text_list.length < 3) return '';
            if (before_val == '기본'){
                before_val = '파라미터';
                return text_list.slice(2).join() + ')\n';
            }
            else{
                before_val = '파라미터';
                return text_list.slice(2).join() + '):\n';
            }
            break;
        case '변수':
            if (text_list.length < 4) return '';
            before_val = '변수';
            if (text_list[2] == '문자'){
                if (text_list[3][text_list[3].length-1] == '는'){
                    return tab +  text_list[3].slice(0, text_list[3].length-1) + ' = "' + text_list.slice(4).join(' ') + '"\n';
                }
                else{
                    text_list[4] = '= "';
                    return tab +  text_list.slice(3).join(' ') + '"\n';
                }
            }
            else if (text_list[2] == '숫자'){
                if (text_list[3][text_list[3].length-1] == '는'){
                    return tab +  text_list[3].slice(0, text_list[3].length-1) + ' = ' + text_list.slice(4).join(' ') + '\n';
                }
                else if (text_list[4] == '-'){
                    text_list[4] = '=';
                    return tab +  text_list.slice(3).join(' ') + '\n';
                }
            }
            else if (text_list[2] == '함수'){
                if (text_list[3][text_list[3].length-1] == '는'){
                    return tab +  text_list[3].slice(0, text_list[3].length-1) + ' = ';
                }
                else{
                    text_list[4] = '=';
                    return tab +  text_list.slice(3).join(' ');
                }
            }
            else if (text_list[2] == '리스트'){
                if (text_list[3][text_list[3].length-1] == '는'){
                    if (text_list[4] == '빈') return tab +  text_list[3].slice(0, text_list[3].length-1) + ' = []\n';
                    else if (text_list[4] == '숫자') return tab +  text_list[3].slice(0, text_list[3].length-1) + ' = [' + text_list.slice(6).join(',') + ']\n';
                    else return tab +  text_list[3].slice(0, text_list[3].length-1) + ' = ["' + text_list.slice(6).join('","') + '"]\n';
                }
            }
            else return '';
            break;
        case '반복문':
            before_val = '반복문';
            if (text_list[2] == 'for'){
                return tab +  text_list.slice(2).join(' ') + ' ('
            }
            else if (text_list[2] == 'while' || text_list[2] == '와일'){
                return tab +  'while (';
            }
            else return '';
            break;
        case '함수':
            if (text_list.length >= 3){
                before_val = '함수'
                 return tab + 'def ' + text_list.slice(2).join('') + '(';
            }
            else return '';
        case '조건문':
            if (text_list.length >= 3){
                before_val = '조건문';
                if (text_list[2] == 'if' || text_list[2] == '이프'){
                    return  tab + 'if (';
                }
                else if ((text_list[2] == 'else' || text_list[2] == '엘스')){
                    return tab + 'else:\n'
                }
                else if((text_list[2] == 'else' || text_list[2] == '엘스') && (text_list[3] == 'if' || text_list[3] == '이프')){
                    return  tab + 'elif (';
                }
            }
            else return '';
            break;
        case '논리':
            if (text_list.length >= 7){
                if (text_list[6] == '같다'){
                    return  text_list[3].slice(0, text_list[3].length-1) + ' == ' + text_list[4] + '):\n';
                }
                else if(text_list[6] == '크다'){
                    return  text_list[3].slice(0, text_list[3].length-1) + ' > ' + text_list[4] + '):\n';
                }
                else if(text_list[6] == '작다'){
                    return  text_list[3].slice(0, text_list[3].length-1) + ' < ' + text_list[4] + '):\n';
                }
                else if(text_list[6] == '크거나'){
                    return  text_list[3].slice(0, text_list[3].length-1) + ' >= ' + text_list[4] + '):\n';
                }
                else if(text_list[6] == '작거나'){
                    return  text_list[3].slice(0, text_list[3].length-1) + ' <= ' + text_list[4] + '):\n';
                }
            }
            else return '';
            break;
        default: return ''
    }

}

app.post('/upload_sound', upload.any(), async (req, res) => {
    console.log("Getting text transcription..");
    let transcription = await testGoogleTextToSpeech(req.files[0].buffer);
    console.log("Text transcription: " + transcription);        
    res.status(200).send(transcription);
});
app.post('/ttp', upload.any(), async (req, res) => {
    console.log("Getting python code..");
    let python_code = await TextToPython(req.body.transcript_data, req.body.tabs);
    console.log("Pyton code: " + python_code);        
    res.status(200).send(python_code);
});
app.listen(port, () => {
    console.log(`Express server listening on port: ${port}...`);
});