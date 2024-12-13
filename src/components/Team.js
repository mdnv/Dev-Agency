import React, { useState } from 'react';
import '../components/css/Team.css';

const Team = () => {
  const [hoverMember, setHoverMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Dennis Ritchie',
      role: 'Lead Designer',
      img: 'https://thedeveloperstory.com/wp-content/uploads/2021/07/The-Greatest-Programmers-1536x1086.png',
      bio: 'Dennis is a creative genius behind our design philosophy.',
    },
    {
      id: 2,
      name: 'Tim Berners-Lee',
      role: 'Web Developer',
      img: 'https://thedeveloperstory.com/wp-content/uploads/2021/07/The-Greatest-Programmers-1-1536x1086.png',
      bio: 'Tim specializes in building robust web applications.',
    },
    {
      id: 3,
      name: 'Linus Torvalds',
      role: 'Project Manager',
      img: 'https://thedeveloperstory.com/wp-content/uploads/2021/07/The-Greatest-Programmers-2-1536x1086.png',
      bio: 'Linus ensures timely delivery and smooth project execution.',
    },
  ];

  return (
    <section id="team" className="team">
      <h2 className='team_text'>Meet Our Team</h2>
      <div className="team_gallery">
        {teamMembers.map(member => (
          <div 
            key={member.id} 
            className={`team_member`}
            onMouseEnter={() => setHoverMember(hoverMember === member.id ? null : member.id)}
            onMouseLeave={() => setHoverMember(hoverMember === member.id ? null : member.id)}
          >
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            {hoverMember === member.id && <p className="bio">{member.bio}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;