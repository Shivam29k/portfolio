import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  preview?: boolean;
}
export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  message,
}) => (
  <div style={{
    backgroundColor: '#f3f4f6',
    padding: '1.25rem'
  }}>
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          color: '#374151',
          marginBottom: '1.5rem',
          paddingBottom: '1rem',
          borderBottom: '2px solid #f3f4f6',
          textAlign: 'center'
        }}>
          New Message from {name}
        </h1>
        
        <div style={{
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <p style={{ color: '#1f2937', fontWeight: 'bold', paddingRight: '0.5rem' }}>Name:</p>
          <p style={{ color: '#1f2937' }}>
            {name}
          </p>
        </div>

        <div style={{
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <strong style={{ color: '#1f2937', fontWeight: 'bold', paddingRight: '0.5rem' }}>Email:</strong>
          <a style={{ color: '#3b82f6' }} href={`mailto:${email}`}>
            {email}
          </a>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <strong style={{
            display: 'block',
            color: '#4b5563',
            marginBottom: '0.5rem',
            fontSize: '1rem'
          }}>Message:</strong>
          <p style={{
            backgroundColor: '#f9fafb',
            padding: '0.75rem',
            borderRadius: '0.25rem',
            color: '#374151',
            fontSize: '15px',
            whiteSpace: 'pre-wrap',
            lineHeight: '1.75'
          }}>
            {message}
          </p>
        </div>

        <footer style={{
          marginTop: '2rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid #f3f4f6',
          color: '#6b7280',
          fontSize: '0.875rem',
          textAlign: 'center'
        }}>
          Sent from shivamk.tech portfolio
        </footer>
      </div>
    </div>
  </div>
);
