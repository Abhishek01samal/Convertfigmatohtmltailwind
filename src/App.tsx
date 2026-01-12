import Section from './imports/Section';
import Section2 from './imports/Section-1-13656';
import Section3 from './imports/Section-1-14111';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* First Page - Exact Figma Design */}
      <Section />
      
      {/* Second Page - Your shortcut to DeFi */}
      <Section2 />
      
      {/* Third Page */}
      <Section3 />
    </div>
  );
}