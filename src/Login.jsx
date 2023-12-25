import React, {useState, useEffect} from "react";

const User = {
    email: 'test@gmail.com',
    pw: '1q2w3e@@'
}

export default function Login(){
    const [email, setEmail] = useState(''); //초기화 String
    const [pw, setPw] = useState(""); //초기화 String

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
        if(emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid, pwValid]);

    const handelEmail = (e) => {
        setEmail(e.target.value);
        const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i; //정규표현식
            
        if (regex.test(e.target.value)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    const handlePw = (e) => {
        setPw(e.target.value);
        const regex =
          /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(e.target.value)) {
          setPwValid(true);
        } else {
          setPwValid(false);
        }
      };

    const onClickConfirmButton = () => {
        if(email === User.email && pw === User.pw) {
            alert('로그인에 성공했습니다.')
        } else {
            alert("등록되지 않은 회원입니다.");
        }
    }



    return (
        <div className="page">
            <div className="titleWrap">
                이메일과 비밀번호
                <br></br>
                입력하시오
            </div>
            <div className="contentWrap">
                <div className="inputTitle">이메일주소</div>
                <div className="inputWrap">
                    <input 
                        type="text"
                        className="input"
                        placeholder="test@gmail.com"
                        value={email}
                        onChange={handelEmail} />
                </div>
                <div className="errorMessageWrap">
                    {!emailValid && email.length > 0 && (
                    <div>올바른 이메일을 입력해주세요.</div>
                    )}
                </div>

                <div style={{ marginTop: "26px" }} className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input 
                        type="password"
                        className="input"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                        value={pw}
                        onChange={handlePw} />
                </div>
                <div className="errorMessageWrap">
                    {!pwValid && pw.length > 0 && (
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )}
                </div>
            </div>

            <div>
                <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
                    확인
                </button>
            </div>
        </div>
    )
}