import { useState } from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: "Programming Languages",
    subcategories: [
      { title: "Python", subtopics: ["Syntax", "Libraries", "Frameworks", "Data Science"] },
      { title: "JavaScript", subtopics: ["ES6", "React", "Node.js", "Web Development"] },
      { title: "Java", subtopics: ["OOP", "Spring Boot", "JVM"] },
      { title: "C++", subtopics: ["STL", "Game Development", "Performance Optimization"] }
    ]
  },
  {
    title: "Artificial Intelligence",
    subcategories: [
      { title: "Machine Learning", subtopics: ["Supervised Learning", "Unsupervised Learning", "Neural Networks"] },
      { title: "Deep Learning", subtopics: ["CNNs", "RNNs", "Transformers"] },
      { title: "Natural Language Processing", subtopics: ["Chatbots", "Sentiment Analysis", "Speech Recognition"] }
    ]
  },
  {
    title: "Data Analytics",
    subcategories: [
      { title: "Data Visualization", subtopics: ["Tableau", "Power BI", "Matplotlib", "Seaborn"] },
      { title: "Big Data", subtopics: ["Hadoop", "Spark", "Data Lakes"] },
      { title: "Data Engineering", subtopics: ["ETL Pipelines", "Data Warehousing", "Cloud Data Solutions"] }
    ]
  },
  {
    title: "Cybersecurity",
    subcategories: [
      { title: "Network Security", subtopics: ["Firewalls", "VPNs", "IDS/IPS"] },
      { title: "Ethical Hacking", subtopics: ["Penetration Testing", "Social Engineering", "Malware Analysis"] },
      { title: "Cryptography", subtopics: ["AES", "RSA", "Blockchain Security"] }
    ]
  },
  {
    title: "Software Development",
    subcategories: [
      { title: "Frontend Development", subtopics: ["React", "Vue", "Angular"] },
      { title: "Backend Development", subtopics: ["Node.js", "Django", "Spring Boot"] },
      { title: "DevOps", subtopics: ["Docker", "Kubernetes", "CI/CD"] }
    ]
  },
  {
    title: "Computer Networks",
    subcategories: [
      { title: "Network Protocols", subtopics: ["TCP/IP", "HTTP/HTTPS", "DNS"] },
      { title: "Cloud Computing", subtopics: ["AWS", "Azure", "Google Cloud"] },
      { title: "Edge Computing", subtopics: ["IoT", "5G Networks", "Fog Computing"] }
    ]
  },
  {
    title: "Operating Systems",
    subcategories: [
      { title: "Linux", subtopics: ["Shell Scripting", "System Administration", "File Systems"] },
      { title: "Windows", subtopics: ["Powershell", "Registry", "User Management"] },
      { title: "Embedded Systems", subtopics: ["RTOS", "Microcontrollers", "IoT"] }
    ]
  },
  {
    title: "Database Management",
    subcategories: [
      { title: "SQL Databases", subtopics: ["MySQL", "PostgreSQL", "SQLite"] },
      { title: "NoSQL Databases", subtopics: ["MongoDB", "Cassandra", "DynamoDB"] },
      { title: "Database Design", subtopics: ["Normalization", "Indexing", "Query Optimization"] }
    ]
  },
  {
    title: "Computer Architecture",
    subcategories: [
      { title: "Microprocessors", subtopics: ["x86", "ARM", "RISC vs CISC"] },
      { title: "Memory Management", subtopics: ["Cache", "Virtual Memory", "Paging"] },
      { title: "Parallel Computing", subtopics: ["Multithreading", "GPU Processing", "Distributed Systems"] }
    ]
  },
  {
    title: "Software Engineering",
    subcategories: [
      { title: "Agile Methodologies", subtopics: ["Scrum", "Kanban", "Extreme Programming"] },
      { title: "Software Testing", subtopics: ["Unit Testing", "Integration Testing", "Test Automation"] },
      { title: "System Design", subtopics: ["Scalability", "Load Balancing", "Microservices"] }
    ]
  }
];

export default function CourseTree() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {courses.map((course, index) => (
        <motion.div
          key={index}
          style={{
            background: "#222",
            color: "#fff",
            padding: "15px",
            margin: "10px auto",
            borderRadius: "10px",
            width: "60%",
            cursor: "pointer",
            boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)"
          }}
          onMouseEnter={() => setHoveredCategory(index)}
          onMouseLeave={() => { setHoveredCategory(null); setHoveredSubcategory(null); }}
        >
          <h2 style={{ color: "#FFD700" }}>{course.title}</h2>
          {hoveredCategory === index && (
            <motion.div style={{ paddingLeft: "20px", marginTop: "10px" }}>
              {course.subcategories.map((sub, subIndex) => (
                <motion.div
                  key={subIndex}
                  style={{
                    background: "#333",
                    padding: "10px",
                    margin: "5px 0",
                    borderRadius: "5px",
                    color: "#00BFFF"
                  }}
                  onMouseEnter={() => setHoveredSubcategory(subIndex)}
                >
                  <h3>{sub.title}</h3>
                  {hoveredSubcategory === subIndex && (
                    <motion.ul style={{ listStyleType: "none", paddingLeft: "15px", color: "#FFD700" }}>
                      {sub.subtopics.map((topic, topicIndex) => (
                        <li key={topicIndex} style={{ fontSize: "14px", margin: "5px 0" }}>{topic}</li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
