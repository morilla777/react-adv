
import { Form, Formik } from 'formik'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const initialValues: { [key: string ]: any } = {};
const requiredFields: { [key: string]: any } = {};

interface IRule{
    type: string;
    value?: string;
}

for( const input of formJson ){
    initialValues[ input.name ] = input.value;

    if( !input.validations ) continue;

    let schema = Yup.string();

    for ( const validation of input.validations ){
        const rule:IRule = validation as IRule;
        if ( rule.type === 'required' ){
            schema = schema.required('Este campo es requerido');
        }

        if ( rule.type === 'minLength' && rule.value ){
            schema = schema.min(+rule.value, `Se requiere un largo mínimo de ${rule.value}`);
        }

        if ( rule.type === 'email' ){
            schema = schema.email('Correo inválido');
        }
    }

    requiredFields[input.name] = schema;

}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
            initialValues={ initialValues }
            validationSchema={ validationSchema }
            onSubmit={ ( values ) => {
                console.log( values );
            }}
        >
            { ( formik ) => (
                <Form noValidate>
                   {
                        formJson.map( ({ type, name, placeholder, label, options}) => {

                            if ( type === 'input' || type === 'password' || type === 'email'){
                                return <MyTextInput 
                                    key={ name }
                                    type={ (type as any) } 
                                    name={ name } 
                                    label={ label } 
                                    placeholder={ placeholder }/>
                            } else if ( type === 'select'){
                                return <MySelect
                                    key={ name }
                                    name={ name } 
                                    label={ label } >
                                        <option value={ 0 }>Select an option</option>
                                        {
                                            options?.map( opt => (
                                                <option key={ opt.id } value={ opt.id }>{ opt.label }</option>
                                            ))
                                        }
                                    </MySelect>
                            }
                            
                            return <span key={ name }>Type: { type } no es soportado</span>
                        })
                   }

                    <button type='submit'>Submit</button>
                    <button type='reset'>Reset</button>
                </Form>
            ) }
        </Formik>
    </div>
  )
}
