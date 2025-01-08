import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);
  const filteredSeq = seq.filter((student) => (student.score > 70));
  const jsObject = filteredSeq.toJS();
  for (const [, value] of Object.entries(jsObject)) {
    value.firstName = (value.firstName.charAt(0).toUpperCase()
      + value.firstName.slice(1));
    value.lastName = (value.lastName.charAt(0).toUpperCase()
      + value.lastName.slice(1));
  }
  console.log(jsObject);
}
