import { 
  BookOpen, 
  Zap, 
  Brain, 
  Mic, 
  FileText, 
  CheckCircle, 
  Clock, 
  Target, 
  Layout, 
  MessageSquare, 
  PenTool,
  Layers
} from 'lucide-react';

export interface StudyTask {
  id: string;
  day: number;
  topic: string;
  subject: string;
  action: 'Revise' | 'Practice' | 'Test';
  description: string;
  completed: boolean;
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface MasteryTool {
  id: string;
  title: string;
  description: string;
  icon: typeof FileText;
  color: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const STUDY_PLAN: StudyTask[] = [
  {
    id: '1',
    day: 1,
    topic: 'Quadratic Equations: Standard Form & Roots',
    subject: 'Mathematics',
    action: 'Revise',
    description: 'Review the derivation of the quadratic formula and the nature of roots using the discriminant.',
    completed: true,
  },
  {
    id: '2',
    day: 1,
    topic: 'Quadratic Equations: Factorization Method',
    subject: 'Mathematics',
    action: 'Practice',
    description: 'Solve 15 problems focusing on splitting the middle term and completing the square.',
    completed: false,
  },
  {
    id: '3',
    day: 2,
    topic: 'Chemical Bonding: Ionic & Covalent Bonds',
    subject: 'Chemistry',
    action: 'Revise',
    description: 'Understand electron dot structures and the octet rule for various molecules.',
    completed: false,
  },
  {
    id: '4',
    day: 2,
    topic: 'Chemical Bonding Quiz',
    subject: 'Chemistry',
    action: 'Test',
    description: 'Take a 20-minute timed assessment on molecular geometry and bond polarity.',
    completed: false,
  },
  {
    id: '5',
    day: 3,
    topic: 'Newton’s Laws of Motion',
    subject: 'Physics',
    action: 'Revise',
    description: 'Deep dive into the second law (F=ma) and free-body diagrams.',
    completed: false,
  },
];

export const FLASHCARDS: Flashcard[] = [
  {
    id: 'fc1',
    question: 'What is the discriminant of a quadratic equation ax² + bx + c = 0?',
    answer: 'The discriminant (D) is given by the formula D = b² - 4ac.',
    category: 'Mathematics',
  },
  {
    id: 'fc2',
    question: 'What does it mean if the discriminant is greater than zero (D > 0)?',
    answer: 'The equation has two distinct real roots.',
    category: 'Mathematics',
  },
  {
    id: 'fc3',
    question: 'Define Electronegativity.',
    answer: 'It is the tendency of an atom to attract a shared pair of electrons towards itself in a covalent bond.',
    category: 'Chemistry',
  },
  {
    id: 'fc4',
    question: 'What is the SI unit of Force?',
    answer: 'The SI unit of Force is the Newton (N), which is equivalent to 1 kg·m/s².',
    category: 'Physics',
  },
];

export const MASTERY_TOOLS: MasteryTool[] = [
  {
    id: 'notes',
    title: 'Smart Notes',
    description: 'Generates structured, high-yield revision notes with highlighted keywords and summary tables.',
    icon: FileText,
    color: 'var(--accent)',
  },
  {
    id: 'flashcards',
    title: 'Active Recall Flashcards',
    description: 'Automatically creates interactive digital decks for spaced repetition and memory retention.',
    icon: Brain,
    color: 'var(--accent)',
  },
  {
    id: 'blueprint',
    title: 'Core Blueprint',
    description: 'Breaks down content into hierarchical key concepts based on exam weightage.',
    icon: Target,
    color: 'var(--accent)',
  },
  {
    id: 'audio',
    title: 'Audio Summary',
    description: 'A 5-minute expert-style explanation script or audio breakdown of the entire chapter.',
    icon: Mic,
    color: 'var(--accent)',
  },
];

export const INITIAL_CHAT: ChatMessage[] = [
  {
    id: 'm1',
    role: 'assistant',
    content: "Hello! I'm your **be topper** AI Tutor. I don't just give answers—I help you understand the 'why' behind them. \n\nUpload a photo of your homework or type a concept you're struggling with. What shall we master today?",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
];

export const FEATURES_LIST = [
  {
    title: 'Intelligent Study Planner',
    description: 'Input your exam date and syllabus. Our AI generates a dynamic, day-by-day roadmap that adapts to your progress.',
    icon: Clock,
  },
  {
    title: 'Content Mastery Hub',
    description: 'Upload any PDF or notes. Instantly get high-yield summaries, flashcards, and exam blueprints.',
    icon: Layers,
  },
  {
    title: 'Socratic AI Tutor',
    description: 'Stuck on a problem? Our tutor guides you through the solution step-by-step, ensuring you actually learn the concept.',
    icon: MessageSquare,
  },
  {
    title: 'Snap-and-Solve',
    description: 'Take a photo of any math or science problem. Get an interactive walkthrough of the solution process.',
    icon: PenTool,
  },
];
