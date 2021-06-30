class Student {
  constructor(lastName, firstName, birthday,
    math, eng, japanese, science, social) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthday = birthday;
    this.math = math;
    this.eng = eng;
    this.japanese = japanese;
    this.science = science;
    this.social = social;
  }

  name() {
    return this.lastName + ' ' + this.firstName;
  }

  // 年齢計算
  age() {
    let today = 20210617;
    return Math.floor(
      (today - this.birthday) / 10000
    );
  }

  goukaku() {
    let val = 0;
    if (this.math >= 60) val++;
    if (this.eng >= 60) val++;
    if (this.japanese >= 60) val++;
    if (this.science >= 60) val++;
    if (this.social >= 60) val++;
    return val;
  }

  goukaku_ave() {
    let goukaku_num = this.goukaku();
    let val = 0;
    if (this.math >= 60) val += this.math;
    if (this.eng >= 60) val += this.eng;
    if (this.japanese >= 60) val += this.japanese;
    if (this.science >= 60) val += this.science;
    if (this.social >= 60) val += this.social;
    // console.log("合計: " + val);
    // console.log("平均: " + (val / goukaku_num));
    return val / goukaku_num;
  }
}

let students = [
  new Student(
    "新倉", "正三", 19780424,
    100, 90, 60, 50, 80
  ),
  new Student(
    "山田", "太郎", 19890624,
    60, 60, 60, 60, 60
  ),
  new Student(
    "小樽", "花子", 20001224,
    50, 60, 70, 40, 100
  )
];

for (let i = 0; i < students.length; i++) {
  let student = students[i];
  console.log(
    student.name() + ' ' +
    student.age() + ' ' +
    student.goukaku() + ' ' +
    student.goukaku_ave()
  );
}
