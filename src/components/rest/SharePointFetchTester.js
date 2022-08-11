import React from 'react';
import threats from './threats.json';

export default function SPFetchTester() {
  console.log(threats[0]['d']['results']);
}
