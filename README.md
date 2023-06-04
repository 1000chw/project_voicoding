# 🎤 Voicoding(목소리로 코딩하기)
**넌 아직도 코딩을 손으로 하니?**

**촌스럽게 누가 손으로 코딩해?**

**요즘은 다 목소리로 해😏**

## About


**Voicoding**은 웹페이지에서 사용자의 음성을 Python 코드로 변환하고, 실행시켜주는 프로젝트입니다. 당신의 아름다운 목소리로 원하는 코드를 짜보세요!

## API & Open source
* **[Google Speech-to-Text](https://cloud.google.com/speech-to-text)**
* **[mattdiamond/Recorderjs](https://github.com/mattdiamond/Recorderjs)**
* **[Google Fonts](https://fonts.google.com)**
* **[Font awesome](https://fontawesome.com)**
* **[judge0/ide](https://github.com/judge0/ide)**


## How to Use
1. **[Google Cloud Platform](https://cloud.google.com)** 에 프로젝트를 생성한 후, **Speech-to-Text**의 서비스 계정을 만든다.
2. 서비스 계정의 서비스 계정 키(JSON)을 다운받고, 시스템 환경 변수에 계정 키 경로를 **GOOGLE_APPLICATION_CREDENTIALS**로 저장한다.

	 * 직접 path에 입력
	 * Linux/macOS
		`export GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"`
	 * Windows
		 `$env:GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"`

3. 프로젝트를 Clone한다. 
`git clone http://khuhub.khu.ac.kr/2019102168/Voicoding.git`

4. Installation
    * `npm install`
5. domain, port 등을 변경한 후 실행한다.


## Usage
Voicoding은 입력되는 자연어가 Python으로 번역되는 소스입니다. 이는 기타 다른 언어 [c++, C, JavaScript 등..]으로 번역되게 수정하실 수 있습니다. js/ide.js 에서 parseInt(), resolveLanguageId(), resolveApiUrl() 에 해당하는 파라미터를 아래에서 찾아 바꿔주세요. 이후, Voicoding.js 에서 파이썬 모델로 설정되어 있는 값들을 해당 언어에 맞게 다시 모델링 해주세요.

	"45" Assembly (NASM 2.14.02)   
	"46" Bash (5.0.0)  
	"47" Basic (FBC 1.07.1)   
	"1011" Bosque (latest)    
	"75" C (Clang 7.0.1)  
	"1013" C (Clang 9.0.1)  
	"1001" C (Clang 10.0.1)  
	"48" C (GCC 7.4.0)  
	"49" C (GCC 8.3.0)  
	"50" C (GCC 9.2.0)  
	"51" C# (Mono 6.6.0.161)  
	"1022" C# (Mono 6.10.0.104)  
	"1021" C# (.NET Core SDK 3.1.302)  
	"1023" C# Test (.NET Core SDK 3.1.302, NUnit 3.12.0)  
	"76" C++ (Clang 7.0.1)  
	"1014" C++ (Clang 9.0.1)  
	"1002" C++ (Clang 10.0.1)  
	"52" C++ (GCC 7.4.0)  
	"53" C++ (GCC 8.3.0)  
	"54" C++ (GCC 9.2.0)  
	"1015" C++ Test (Clang 10.0.1, Google Test 1.8.1)  
	"1012" C++ Test (GCC 8.4.0, Google Test 1.8.1)  
	"1003" C3 (latest)   
	"86" Clojure (1.10.1)  
	"77" COBOL (GnuCOBOL 2.2)   
	"55" Common Lisp (SBCL 2.0.0)   
	"56" D (DMD 2.089.1)   
	"57" Elixir (1.9.4)   
	"58" Erlang (OTP 22.2)   
	"44" Executable  
	"87" F# (.NET Core SDK 3.1.202)  
	"1024" F# (.NET Core SDK 3.1.302)  
	"59" Fortran (GFortran 9.2.0)   
	"60" Go (1.13.5)  
	"88" Groovy (3.0.3)   
	"61" Haskell (GHC 8.8.1)   
	"62" Java (OpenJDK 13.0.1)  
	"1004" Java (OpenJDK 14.0.1)  
	"1005" Java Test (OpenJDK 14.0.1, JUnit Platform Console Standalone 1.6.2)  
	"63"  JavaScript (Node.js 12.14.0)  
	"78"  Kotlin (1.3.70)  
	"64" Lua (5.3.5)  
	"1006" MPI (OpenRTE 3.1.3) with C (GCC 8.3.0)  
	"1007" MPI (OpenRTE 3.1.3) with C++ (GCC 8.3.0)  
	"1008" MPI (OpenRTE 3.1.3) with Python (3.7.3)  
	"1009"Nim (stable)   
	"79" Objective-C (Clang 7.0.1)  
	"65" OCaml (4.09.0)  
	"66" Octave (5.1.0)  
	"67" Pascal (FPC 3.0.4)  
	"85" Perl (5.28.1)  
	"68" PHP (7.4.1)  
	"43" Plain Text  
	"69"  Prolog (GNU Prolog 1.4.5)   
	"70" Python (2.7.17)  
	"71" Python (3.8.1)  
	"1010" Python for ML (3.7.3)  
	"80" R (4.0.0)  
	"72" Ruby (2.7.0)  
	"73" Rust (1.40.0)  
	"81" Scala (2.13.2)  
	"82" SQL (SQLite 3.27.2)  
	"83" Swift (5.2.3)  
	"74" TypeScript (3.7.4)  
	"84" Visual Basic.Net (vbnc 0.0.0.5943)   
## Author
* 민병수(Min byeong-soo)

	:email: : qud9783@khu.ac.kr
* 천현우(Chon hyun-woo)

	:email: : 2019102233@khu.ac.kr


## License
Voicoding is licensed under the GNU General Public License v3.0.
