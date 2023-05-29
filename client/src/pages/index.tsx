import Head from 'next/head'

import { Container } from '../components/Container'


interface IndexProps {

}

const Index: React.FC<IndexProps> = ({}) => {
    return (
        <>
            <Head>
                <title>Login Project</title>
                <meta name="description" content="Welcome to Witq"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <div>
                    <h1 className="text-6xl">Login Project</h1>
                    <br />
                    <p>
                        Includes social logins, account verification, password change & recover. 
                    </p>
                    <br />
                    <p>
                        It is composed of nestjs framework as server side and nextjs framework as client side.
                    </p>
                </div>
            </Container>
        </>
    )
}

export default Index