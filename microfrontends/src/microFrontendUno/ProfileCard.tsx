// src/microFrontendUno/ProfiledCard.tsx

import React from 'react';

// Definir la estructura de las props
interface ProfileCardProps { //¿props?
    imageUrl: string;
    name: string;
    description: string;
}

const ProfiledCard: React.FC<ProfileCardProps> = ({ imageUrl, name, description }) => {
    return (
        <div className='profile-card'>
            <img src={imageUrl} alt={`Perfil de ${name}`} />
            <h2>{name}</h2>
            <p>{description}</p>
            <button>Contactar</button>
        </div>
    );
};

export default ProfiledCard;
