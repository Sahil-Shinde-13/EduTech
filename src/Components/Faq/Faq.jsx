import React, { useState } from 'react'
import './Faq.css'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggle}>
        <h3>{question}</h3>
        <span className="faq-toggle">{isOpen ? '-' : '+'}</span>
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

function Faq() {
  const faqData = [
    { question: 'What is EduTech?', answer: 'EduTech is a platform that offers a variety of educational programs in technology.' },
    { question: 'How can I apply for a program?', answer: 'You can apply for a program through our website by filling out the application form.' },
    { question: 'What are the program durations?', answer: 'Program durations vary; please check individual program details for specific information.' },
    { question: 'Do you offer online classes?', answer: 'Yes, we offer both online and offline classes for most of our programs.' },
    // Add more FAQs as needed
  ]

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}

export default Faq
