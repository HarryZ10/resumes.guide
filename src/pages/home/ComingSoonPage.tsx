import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const ComingSoonPage: React.FC = () => {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat w-full h-screen flex items-center justify-center"
            style={PageStyle}
        >
            <Card style={CardStyle}>
                <Title level={2} className="text-4xl text-gray-800 mb-4" style={{
                    fontFamily: 'RadioCanadaBigBold'
                }}>
                    resumes.guide
                </Title>
                <Paragraph style={{
                    fontFamily: 'RadioCanadaBig',
                    letterSpacing: '0.09rem',
                    fontSize: '18px',
                    color: '#000'
                }}>
                    Something exciting is coming soon!
                </Paragraph>
            </Card>
        </div>
    );
};

const CardStyle: React.CSSProperties = {
    width: 400,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '25px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const PageStyle: React.CSSProperties = {
    backgroundImage: "url('cover.png')",
    minHeight: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
};

export default ComingSoonPage;