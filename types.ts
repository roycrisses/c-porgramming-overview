
// Import React to provide access to the React namespace for type definitions like ReactNode
import React from 'react';

export interface SubTopic {
  id: string;
  title: string;
  path: string;
}

export interface Module {
  id: string;
  title: string;
  icon: React.ReactNode;
  topics: SubTopic[];
}

export interface ExamFocusItem {
  question: string;
  concept: string;
}

// Extended types for comprehensive content structure
export interface CodeExample {
  title: string;
  code: string;
  explanation: string;
  output?: string;
}

export interface MemoryDiagramData {
  type: 'table' | 'mermaid';
  content: string;
  caption: string;
}

export interface ExamQuestion {
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'theoretical' | 'practical';
}

export interface ContentSection {
  title: string;
  content: string;
  subsections?: ContentSection[];
}
