import { useForm } from "react-hook-form"

type FormInputs = {
    email: string;
    password: string;
}

const FormsPage = (myForm: FormInputs) => {
    const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
        defaultValues: {
            email: 'Johancamilo@hotmail.com',
            password: 'abc123'
        }
     
    });

    const onSubmit = () => {

    }

    watch
  return (
    <>
        <form onSubmit={ handleSubmit( onSubmit ) }>
            <h3>Formularios</h3>
            <div style={{display: 'flex', flexDirection: 'column'}} >
                <input 
                    type="text"
                    placeholder="Email"
                    {...register('email')}
                />
                <input 
                    type="text"
                    placeholder="Password"
                    {...register('password')}
                />
                <button type="submit">Ingresar</button>
            </div>
        </form>
    </>
  )
}

export default FormsPage
