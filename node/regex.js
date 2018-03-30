/**
  * 아이디 정규식
  * Naver: n~k자 영문소문자 & 숫자만 & 허용된 특수문자만(-,_)
  * 이름 정규식
  * 한글, 영문 대소문자
  * 이메일 정규식
  * 7
  */

 const idRegex = /^[a-z0-9-_]{0,}$/g
 const nameRegex = /^[가-힣|a-z|A-Z|\*]+$/
 const emailRegex = /^[a-zA-Z0-9-_]{0,}@[a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
 
 export const checkId = (id, n, k) => {
   if(idRegex.test(id)) {
     if(id.length < n) {
       return '아이디는 '+ n + '자 이상이어야 합니다.'
     } else if(id.length > k) {
       return '아이디는 '+ k + '자를 초과할 수 없습니다.'
     } else if(n < id.length && id.length < k) {
       return '가능한 아이디입니다.'
     }
   } else {
     return n + '~' + k + '자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.'
   }
 }
 
 export const checkName = (name) => {
   if(nameRegex.test(name)) {
     return '사용가능한 이름입니다.'
   } else {
     return '이름을 정확히 입력해주세요.'
   }
 }
 
 export const checkEmail = (email, n, k) => {
   let emailId = email.split('@')[0]
   if(emailRegex.test(email)) {
     if(emailId.length < n) {
       return '아이디는 '+ n + '자 이상이어야 합니다.'
     } else if(emailId.length > k) {
       return '아이디는 '+ k + '자를 초과할 수 없습니다.'
     } else if(n < emailId.length && emailId.length < k) {
       return '사용가능한 이메일 주소입니다.'
     }
   } else {
     return '잘못된 이메일 주소입니다.'
   }
 }