import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/50559381?s=460&u=777d408b6aa6c3f2125a0661eac89ee5cbffac3f&v=4"
            alt="Gabriel Tsunoda"
          />
          <div>
            <strong>Projeto Check-in AMBEV</strong>
            <p>Projeto Criado durante o mega hack 3.0 da Shawee</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/50559381?s=460&u=777d408b6aa6c3f2125a0661eac89ee5cbffac3f&v=4"
            alt="Gabriel Tsunoda"
          />
          <div>
            <strong>Projeto Check-in AMBEV</strong>
            <p>Projeto Criado durante o mega hack 3.0 da Shawee</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/50559381?s=460&u=777d408b6aa6c3f2125a0661eac89ee5cbffac3f&v=4"
            alt="Gabriel Tsunoda"
          />
          <div>
            <strong>Projeto Check-in AMBEV</strong>
            <p>Projeto Criado durante o mega hack 3.0 da Shawee</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
