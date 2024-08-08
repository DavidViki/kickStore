import React from "react";

const teamMembers = [
    {
        name: 'David Damjanovic',
        role: 'Founder & CEO',
        imageUrl: 'https://media1.giphy.com/media/67ThRZlYBvibtdF9JH/giphy_s.gif?cid=6c09b952blqiqbpvevn2wck0wnz7ef8n095u6doebcublnt5&ep=v1_internal_gif_by_id&rid=giphy_s.gif&ct=g',
        bio: 'David is the visionary behind Kick Lover, with a deep passion for sneakers and a commitment to providing the best selection to our customers.'
    },
    {
        name: 'Mary Jane',
        role: 'Chief Marketing Officer',
        imageUrl: 'https://www.syfy.com/sites/syfy/files/2021/11/spideyannual19_mj.jpg',
        bio: 'Jane is responsible for spreading the word about Kick Lover. Her innovative marketing strategies keep us at the forefront of the sneaker world.'
    },
    {
        name: 'Albert Hofmann',
        role: 'Head of Product',
        imageUrl: 'https://live-production.wcms.abc-cdn.net.au/7ee01d94d079864bdec7ad7709469941?impolicy=wcms_crop_resize&cropH=643&cropW=643&xPos=0&yPos=97&width=862&height=862',
        bio: 'Albert curates our sneaker collection, ensuring that we always offer the latest and greatest in sneaker fashion.'
    },
    {
        name: 'Sigmund Freud',
        role: 'Customer Experience Manager',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/1200px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg',
        bio: 'Sigmund is dedicated to making sure our customers have the best experience possible, from browsing our site to receiving ther sneakers.'
    },
    {
        name: 'Dalai Lama',
        role: 'Customer Support',
        imageUrl: 'https://static01.nyt.com/images/2009/02/01/weekinreview/01powell.xlarge1.jpg?quality=75&auto=webp&disable=upscale',
        bio: 'With a profound understanding of compassion and mindfulness, Dalai brings a unique and calming pressence to the customer support team at Kick Lover.'
    },
    {
        name: 'Daffy Duck',
        role: 'Creative Advisor',
        imageUrl: 'https://i.redd.it/mrwiygwk08ab1.jpg',
        bio: 'Bringing unparalleled innovation and design thinking to Kick Lover. Known for his visionary approach and ability to create products that blend form and function seamleslly.'
    }
];

function Team() {
    return (
        <div className="team-page">
            <h1 className="page-title">Meet Our Team</h1>
            {/* Team photo */}
            <div className="team-photo">
                <img
                src="https://i.redd.it/xs6n2czhun491.jpg"
                alt="Our Team"
                className="team-photo-image"
                />
            </div>
            <p>
                At Kick Lover, our team is passionate about sneakers and dedicated to bringing you the best experience possible.
                Get to know the people behind the brand.
            </p>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="team-member-image"
                        />
                        <h3>{member.name}</h3>
                        <p className="role">{member.role}</p>
                        <p className="bio">{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team;