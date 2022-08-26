import * as R from 'ramda';
import { IPerson, makeRandomIPerson } from './model/person';

const person: IPerson = makeRandomIPerson();

const name = R.pipe(
    R.prop('name'),
    R.tap((name) => console.log(name)), // Ollie Schwartz(랜덤 생성된 이름)
)(person);
