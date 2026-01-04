
import React from 'react';
import TopicSection from '../components/TopicSection';

const Fundamentals: React.FC = () => {
  return (
    <div className="py-4">
      <div className="mb-12">
        <span className="text-indigo-600 font-semibold text-sm tracking-widest uppercase">Unit 1</span>
        <h1 className="text-4xl font-extrabold text-slate-900 mt-2">C Fundamentals</h1>
        <p className="mt-4 text-slate-600 text-lg">
          The building blocks of C programming: Data types, storage, and lexical elements.
        </p>
      </div>

      <TopicSection 
        title="1. Data Types & Storage"
        description="C is a statically typed language. Every variable must have a type that defines how many bytes it occupies and what kind of data it can store."
        diagram={`
          graph TD
          D[Data Types] --> P[Primary]
          D --> DV[Derived]
          D --> U[User-Defined]
          P --> INT[int, float, char, double]
          DV --> AR[Arrays, Pointers]
          U --> ST[Struct, Union, Enum]
        `}
        code={`
#include <stdio.h>

int main() {
    int age = 20;          // 4 bytes
    float gpa = 3.8;       // 4 bytes
    char grade = 'A';      // 1 byte
    double pi = 3.14159;   // 8 bytes

    printf("Size of int: %zu bytes\\n", sizeof(int));
    printf("Size of char: %zu byte\\n", sizeof(char));

    return 0;
}
        `}
        examFocus={[
          "Size and Range of various data types.",
          "Type Conversion: Implicit (Coercion) vs Explicit (Casting).",
          "Format Specifiers used in printf/scanf (%d, %f, %c, etc.)."
        ]}
        summary={[
          "Variable names must start with a letter or underscore.",
          "C is case-sensitive.",
          "Constants can be defined using #define or const keyword."
        ]}
      />
    </div>
  );
};

export default Fundamentals;
