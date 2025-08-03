import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Formulario() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const respuesta = await axios.post('http://tu-backend.com/api/contactos', data);
      alert(respuesta.data.mensaje);
    } catch (error) {
      alert('Error enviando formulario');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('nombre')}
        placeholder="Nombre"
      />

      <input
        {...register('email')}
        placeholder="Email"
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
