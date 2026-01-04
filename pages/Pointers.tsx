
import React from 'react';
import TopicSection from '../components/TopicSection';

const Pointers: React.FC = () => {
  return (
    <div className="py-4">
      <div className="mb-12">
        <span className="text-indigo-600 font-semibold text-sm tracking-widest uppercase">Unit 4</span>
        <h1 className="text-4xl font-extrabold text-slate-900 mt-2">Pointers & Memory Management</h1>
        <p className="mt-4 text-slate-600 text-lg">
          Demystifying the most powerful (and feared) concept in C: Directly manipulating memory addresses.
        </p>
      </div>

      <TopicSection 
        title="1. Pointer Fundamentals"
        description="A pointer is a variable that stores the memory address of another variable. Understanding pointers requires thinking in terms of 'Address' (&) vs 'Value' (*)."
        diagram={`
          graph LR
          subgraph "Memory Layout"
          P[Pointer 'ptr'] -- stores --> A[Address 0x7ffd]
          A -- contains --> V[Value: 10]
          end
        `}
        code={`
#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num; // ptr stores address of num

    printf("Value of num: %d\\n", num);
    printf("Address of num: %p\\n", &num);
    printf("Value via pointer: %d\\n", *ptr); // Dereferencing
    
    *ptr = 20; // Modify original via pointer
    printf("New value of num: %d\\n", num);

    return 0;
}
        `}
        examFocus={[
          "Size of a pointer variable: Does it depend on the data type it points to?",
          "Pointer declaration vs. Dereferencing syntax.",
          "NULL pointers and Wild pointers."
        ]}
        summary={[
          "& is the 'Address-of' operator.",
          "* is the 'Value-at-address' (dereference) operator.",
          "Pointers enable 'Pass by Reference' in functions."
        ]}
      />

      <TopicSection 
        title="2. Dynamic Memory Allocation (DMA)"
        description="Unlike static arrays, DMA allows programs to request memory during runtime. This is essential for building flexible data structures like Linked Lists."
        diagram={`
          graph TD
          H[Heap Memory]
          M[malloc] -- requests --> H
          F[free] -- releases --> H
          subgraph "Stack vs Heap"
          S[Stack: Local Vars]
          HP[Heap: DMA]
          end
        `}
        code={`
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 5;
    // Requesting space for 5 integers on the heap
    int *arr = (int*) malloc(n * sizeof(int));

    if (arr == NULL) {
        printf("Memory Allocation Failed!\\n");
        return 1;
    }

    for(int i=0; i<n; i++) arr[i] = i * 10;

    // CRITICAL: Always release memory
    free(arr);
    arr = NULL; // Avoid dangling pointer

    return 0;
}
        `}
        examFocus={[
          "Difference between malloc() and calloc().",
          "What happens if you don't use free()? (Memory Leaks).",
          "The role of realloc() in resizing arrays."
        ]}
        summary={[
          "malloc() returns a void pointer (void*).",
          "calloc() initializes allocated memory to zero.",
          "Memory in the Heap persists until explicitly freed."
        ]}
      />
    </div>
  );
};

export default Pointers;
