import styled from 'styled-components';

const BotonEstilizado = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Boton = ({ onClick, children }) => {
  return (
    <BotonEstilizado onClick={onClick}>
      {children}
    </BotonEstilizado>
  );
};

export default Boton;
