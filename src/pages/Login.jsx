import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AuthShell from '../components/AuthShell';

export default function Login(){
 const {register, handleSubmit, formState:{errors}}=useForm();
 const onSubmit=()=>{};
 return <AuthShell title="Entre na sua conta" text="A autenticação real será conectada ao backend na próxima etapa."><form onSubmit={handleSubmit(onSubmit)} className="auth-form"><label>Email<input type="email" placeholder="seu@email.com" {...register('email',{required:'Informe seu email.'})}/>{errors.email&&<small>{errors.email.message}</small>}</label><label>Senha<input type="password" placeholder="Sua senha" {...register('senha',{required:'Informe sua senha.'})}/>{errors.senha&&<small>{errors.senha.message}</small>}</label><div className="form-between"><span></span><Link to="/recuperar-senha">Esqueci minha senha</Link></div><button type="submit" className="auth-submit">Entrar</button><p className="auth-switch">Ainda não possui conta? <Link to="/cadastro">Cadastre-se</Link></p></form></AuthShell>
}
