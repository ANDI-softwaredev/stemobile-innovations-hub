import { Microscope, Truck, Glasses, Code, LucideIcon } from "lucide-react";

export interface Program {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  features: string[];
  color: string;
  bgGlow: string;
  duration: string;
  capacity: string;
  targetAudience: string;
  includes: string[];
}

export const programs: Program[] = [
  {
    id: "container-lab",
    icon: Microscope,
    title: "Young Einstein's Hub",
    subtitle: "Container Lab",
    description: "Solar-powered science labs built inside refurbished shipping containers, bringing high-quality STEM education to rural schools. Each lab accommodates up to 15 students with full science experiment kits, robotics tools, and digital learning devices.",
    fullDescription: "Our flagship Container Lab program transforms refurbished shipping containers into fully-equipped, solar-powered science laboratories. These innovative learning spaces are strategically placed in rural schools and communities, providing students with access to hands-on STEM experiences they would otherwise never encounter. Each lab is designed to be self-sufficient, operating entirely on solar power, and equipped with everything needed for comprehensive science education.",
    features: ["15 Students Per Session", "Solar Powered", "Full Equipment"],
    color: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500/20",
    duration: "Half-day or Full-day sessions",
    capacity: "Up to 15 students per session",
    targetAudience: "Primary and Secondary Schools",
    includes: [
      "Complete science experiment kits",
      "Robotics and coding equipment",
      "Digital learning tablets",
      "Trained STEM facilitator",
      "Educational materials and workbooks",
      "Certificates of participation"
    ]
  },
  {
    id: "mobile-lab",
    icon: Truck,
    title: "Mini STEM Mobile Lab",
    subtitle: "Portable Learning",
    description: "A compact, vehicle-mounted lab carrying essential STEM tools including microscopes, science kits, robotics sets, tablets, and coding equipment. Perfect for reaching the most remote schools and community centers.",
    fullDescription: "The Mini STEM Mobile Lab brings science directly to your doorstep. This specially equipped vehicle carries a complete set of STEM learning tools, allowing us to reach the most remote schools and community centers across Zimbabwe. Our mobile lab can set up in any classroom or outdoor space, transforming it into a dynamic science learning environment within minutes.",
    features: ["Fully Portable", "Complete STEM Kit", "Classroom Setup"],
    color: "from-green-500 to-emerald-500",
    bgGlow: "bg-green-500/20",
    duration: "2-4 hour sessions",
    capacity: "Up to 30 students per session",
    targetAudience: "All Schools and Community Centers",
    includes: [
      "Portable microscopes and science equipment",
      "Robotics starter kits",
      "Tablets with educational software",
      "Hands-on experiment materials",
      "Expert STEM instructor",
      "Take-home activity sheets"
    ]
  },
  {
    id: "vr-lab",
    icon: Glasses,
    title: "Virtual Reality Lab",
    subtitle: "Immersive Learning",
    description: "Experience science through VR headsets and digital simulations. Explore space, dive into cells, conduct safe chemical experiments, and walk through 3D engineering workshops—all without physical risk or expensive materials.",
    fullDescription: "Step into the future of education with our Virtual Reality Lab. Using cutting-edge VR technology, students can explore impossible environments—from the surface of Mars to the inside of a human cell. Our VR experiences make abstract concepts tangible and dangerous experiments safe, opening up entirely new possibilities for STEM education in any setting.",
    features: ["Safe Experiments", "3D Environments", "Interactive Lessons"],
    color: "from-purple-500 to-pink-500",
    bgGlow: "bg-purple-500/20",
    duration: "1-3 hour sessions",
    capacity: "Up to 20 students per session",
    targetAudience: "Secondary Schools and Tertiary Institutions",
    includes: [
      "VR headsets for all participants",
      "Curated educational VR experiences",
      "Interactive science simulations",
      "Space and anatomy exploration",
      "Chemistry lab simulations",
      "Facilitator-guided sessions"
    ]
  },
  {
    id: "coding-robotics",
    icon: Code,
    title: "Coding & Robotics",
    subtitle: "Future Skills",
    description: "Hands-on programs teaching practical problem-solving and creativity through programming and robotics. Students build, program, and experiment with real robots and digital tools to prepare for the Fourth Industrial Revolution.",
    fullDescription: "Prepare your students for the digital future with our Coding & Robotics program. Through hands-on workshops and bootcamps, students learn programming fundamentals, computational thinking, and robotics engineering. From building and programming robots to creating their own apps and games, this program develops the critical skills needed for the Fourth Industrial Revolution.",
    features: ["Real Robots", "Digital Tools", "Bootcamps"],
    color: "from-orange-500 to-yellow-500",
    bgGlow: "bg-orange-500/20",
    duration: "Multi-day bootcamps or weekly sessions",
    capacity: "Up to 25 students per session",
    targetAudience: "Primary and Secondary Schools",
    includes: [
      "Programmable robots and kits",
      "Laptops with coding software",
      "Scratch and Python programming",
      "App development basics",
      "Project-based learning",
      "Competition preparation"
    ]
  }
];

export const getProgramById = (id: string): Program | undefined => {
  return programs.find(program => program.id === id);
};
