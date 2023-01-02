function solution(n, lost, reserve) {
  const students = {};

  lost.forEach((el) => (students[el] = 0));
  reserve.forEach((el) => {
    students[el] = students[el] !== undefined ? -1 : 1;
  });

  const filteredLost = lost.filter((el) => students[el] === 0);

  let result = n - filteredLost.length;

  for (const el of filteredLost.sort()) {
    if (students[el - 1] === 1) {
      delete students[el - 1];
      result++;
    } else if (students[el + 1] === 1) {
      delete students[el + 1];
      result++;
    }
  }
  return result;
}

// 문제
// 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
// 최대한 많은 학생이 체육수업을 들어야 합니다
// 체육수업을 들을 수 있는 학생의 최댓값을 return

// 풀이

// 여벌 체육복을 갖고 있으나 도난 당한 학생을 필터링 (빌려줄 수 없음)
// 중복 여부를 체크하기 위한 빈객체 obj 선언
// lost의 요소들을 키로 갖는 객체를 만든다.
// lost.forEach를 사용, obj.el = 0 할당

// reserve를 순회
// 만약 obj.el이 undefined가 아니라면 (값이 존재한다면)
// -1을 할당한다 (중복 처리)
// 그렇지 않다면
// 1을 할당한다

// filteredLost 변수에 filter 메소드를 사용, obj.el이 0인 경우만 필터하여 할당
// filteredReserve 변수에 filter 메소드를 사용,  obj.el이 1인 경우만 필터하여 할당

// result = 값의 최솟값은 n - filteredLost.length -> 체육복을 잃어버리지 않은 학생으로 초깃값 설정

// 전 번호가 없으면 후 번호를 사용한다. 사용은 전번호 먼저
// filteredLost를  for 문으로 순회한다

// obj[lost[i] - 1]이 1인 경우
// result 값 1 증가
// delete 명령어로 obj[lost[i] - 1] 를 지운다
// obj[lost[i] + 1]이 1인 경우
// lost의 다음 요소의
// result 값 1 증가
// delete 명령어로 obj[lost[i] + 1] 를 지운다

// result 리턴
