
import {InputContainer} from './styles'

export function Input({value}){

    return(
        <InputContainer>
            <input disabled value={value}/>
        </InputContainer>
    )
}