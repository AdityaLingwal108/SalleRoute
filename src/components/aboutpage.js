import React, { useEffect, useRef } from 'react';
import TeamMember from './teampage';

function AboutPage() {
  const teamRef = useRef(null);

  // Team members data
  const teamMembers = [
    { name: "Aniket Agarwal", role: "Backend", photo: "aniket.jpg" },
    { name: "Aditya Lingwal", role: "Frontend", photo: "aditya.jpg" },
    { name: "Daniel Dan-Ebbah", role: "Mentor", photo: "daniel.jpg", isMentor: true },
    { name: "Elisa Zhu", role: "Frontend", photo: "elisa.jpg" },
    { name: "Jhann Quiambao", role: "Backend", photo: "jhann.jpg" },
    { name: "Kalyani Batle", role: "Team Lead", photo: "kalyani.jpg", isTeamLead: true }
  ];

  // Animation effect similar to the original JavaScript
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
  
    const members = teamRef.current?.querySelectorAll('.team-member');
    members?.forEach((member, index) => {
      member.style.opacity = '0';
      member.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        member.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        member.style.opacity = '1';
        member.style.transform = 'translateY(0)';
      }, index * 150);
  
      observer.observe(member);
    });
  
    return () => {
      members?.forEach((member) => observer.unobserve(member));
      observer.disconnect();
    };
  }, []);
  

  return (
    <section className="about-section">
      <h1 className="title about-title">Meet our team members</h1>
      
      <p className="about-description">
        We are a group of 6 students from the Google Developer Student Club at Concordia University, and we built this 
        interactive map to make campus navigation easier. Finding specific rooms in buildings can be frustrating and time-
        consuming, so our goal is to make location information more accessible. We hope to make your campus life a little 
        simpler and more efficient.
      </p>

      <div className="team-grid" ref={teamRef}>
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={index}
            name={member.name}
            role={member.role}
            photo={member.photo}
            isTeamLead={member.isTeamLead}
            isMentor={member.isMentor}
          />
        ))}
      </div>
    </section>
  );
}

export default AboutPage;