import React from 'react'
import CpfService from '../../services/cpf.service'

const Home = () => (
  <>
    <p>{CpfService.generate()}</p>
  </>
)

export default Home