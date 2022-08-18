//중첩해서 줄이기
/*
if문을 줄이는 방법
    1. if문 다음에 나오는 공통된 절차를 분기점 내부에 넣는다.
    2. 분기점에서 짧은 절차부터 실행하게 if문을 작성한다.
    3. 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for문 내부의 경우)로 중단한다.
    4. else를 제거한다.(이때 중첩 하나가 제거된다.)
    5. 다음 중첩된 분기점이 나오면 1~4의 과정을 반복한다.
if(조건A){
    if(조건B){
        if(조건C){

        }
    }else{
        if(조건D){
            //나는 어떻게 실행되지?
            if(조건E){

            }else{
                //나는?
            }
            //나는?
        }else{

        }
    }
}
*/
function test() {
    let result = '';
    if (a) {
        result = 'a';
        result += 'b';
        return result;
    }
    if (!b) {
        result = 'c';
    }
    result += 'b';
    return result;
}
