import { ArrowLeft, AtSign, IdCard, KeyRound, Leaf, LockKeyhole, MapPin, Phone, UserRound } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Brand from '../components/Brand'

function AuthShell({ children, title, text }) {
  return <div className="auth-page"><aside className="auth-visual"><div className="auth-brand"><Brand /></div><div className="auth-visual-content"><span className="auth-kicker">Descarte consciente</span><h2>{title}</h2><p>{text}</p></div><div className="auth-benefits"><div className="feature-line"><MapPin size={19} /> Pontos de coleta próximos de você</div><div className="feature-line"><Leaf size={19} /> Descarte correto, menos poluição</div></div></aside><section className="auth-form-side">{children}</section></div>
}

function Field({ label, icon: Icon, error, ...props }) {
  return <div className="mb-3"><label className="form-label" htmlFor={props.id}>{label}</label><div className="input-wrap"><Icon className="input-icon" size={18} /><input className={`form-control ${error ? 'is-invalid' : ''}`} {...props} />{error && <div className="invalid-feedback">{error.message}</div>}</div></div>
}

export function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const navigate = useNavigate()
  const submit = async () => navigate('/inicio')
  return <AuthShell title="Um lugar onde seu eletrônico tem um bom destino." text="Encontre pontos de coleta, acompanhe seus descartes e consulte sua pontuação."><form className="auth-form" onSubmit={handleSubmit(submit)} noValidate><span className="form-kicker">Bem-vindo de volta</span><h1>Acesse sua conta</h1><p className="auth-subtitle">Entre para continuar no EletroRecicla.</p><div className="demo-notice">Acesso demonstrativo: preencha os campos para navegar. A autenticação real será conectada ao backend.</div><Field id="email" label="E-mail" type="email" autoComplete="email" icon={AtSign} error={errors.email} placeholder="seu@email.com" {...register('email', { required: 'Informe seu e-mail.' })} /><Field id="senha" label="Senha" type="password" autoComplete="current-password" icon={LockKeyhole} error={errors.senha} placeholder="Digite sua senha" {...register('senha', { required: 'Informe sua senha.' })} /><div className="text-end mb-3"><Link className="text-link" to="/recuperar-senha">Esqueci minha senha</Link></div><button className="btn-eco" disabled={isSubmitting}>{isSubmitting ? 'Entrando...' : 'Entrar'}</button><p className="auth-footer">Ainda não possui conta? <Link to="/cadastro">Cadastre-se</Link></p></form></AuthShell>
}

export function Cadastro() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  return <AuthShell title="Um lugar onde seu eletrônico tem um bom destino." text="Encontre pontos de coleta, registre seus descartes e acompanhe sua pontuação."><form className="auth-form" onSubmit={handleSubmit(async () => {})} noValidate><span className="form-kicker">Comece por aqui</span><h1>Crie sua conta</h1><p className="auth-subtitle">Leve seus eletrônicos ao lugar certo.</p><div className="row g-3"><div className="col-12"><Field id="nome" label="Nome" placeholder="Seu nome" icon={UserRound} error={errors.nome} {...register('nome', { required: 'Informe seu nome.' })} /></div><div className="col-md-6"><Field id="email" label="E-mail" type="email" placeholder="seu@email.com" icon={AtSign} error={errors.email} {...register('email', { required: 'Informe seu e-mail.' })} /></div><div className="col-md-6"><Field id="telefone" label="Telefone" type="tel" placeholder="(00) 00000-0000" icon={Phone} error={errors.telefone} {...register('telefone', { required: 'Informe seu telefone.' })} /></div><div className="col-md-6"><Field id="cpf" label="CPF" inputMode="numeric" placeholder="000.000.000-00" icon={IdCard} error={errors.cpf} {...register('cpf', { required: 'Informe seu CPF.' })} /></div><div className="col-md-6"><Field id="senha" label="Senha" type="password" placeholder="Digite sua senha" icon={LockKeyhole} error={errors.senha} {...register('senha', { required: 'Informe uma senha.' })} /></div><div className="col-12"><Field id="endereco" label="Endereço" placeholder="Seu endereço" icon={MapPin} error={errors.endereco} {...register('endereco', { required: 'Informe seu endereço.' })} /></div></div><button className="btn-eco" disabled={isSubmitting}>{isSubmitting ? 'Criando conta...' : 'Criar conta'}</button><p className="auth-footer">Já possui conta? <Link to="/login">Entrar</Link></p></form></AuthShell>
}

export function RecuperarSenha() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  return <AuthShell title="Seu acesso continua protegido." text="Recupere sua conta para continuar acompanhando seus descartes."><form className="auth-form" onSubmit={handleSubmit(() => {})} noValidate><Link className="text-link d-inline-flex align-items-center gap-2 mb-4" to="/login"><ArrowLeft size={18} />Voltar</Link><span className="empty-icon ms-0"><KeyRound size={25} /></span><span className="form-kicker">Recupere o acesso</span><h1>Recuperar senha</h1><p className="auth-subtitle">Informe o e-mail cadastrado. Nesta etapa, o formulário ainda não envia códigos.</p><Field id="email" label="E-mail" type="email" placeholder="seu@email.com" icon={AtSign} error={errors.email} {...register('email', { required: 'Informe seu e-mail.' })} /><button className="btn-eco">Continuar</button></form></AuthShell>
}
