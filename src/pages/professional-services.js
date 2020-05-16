import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Wrap = styled.div`
    padding: 3vw 15vw 15vw 15vw;
    h1 {
        text-align: center;
        margin-bottom: 4rem;
    }
    a {
        color: blue;
    }
`

const ProfessionalServices = () => {
    const pageContent = useStaticQuery(graphql`
        query {
            contentfulPage(title: {eq: "Professional Services"}) {
                pageContent {
                    json
                }
            }
        }
    `).contentfulPage.pageContent.json;
    return(
        <Layout>
            <Wrap>
                {documentToReactComponents(pageContent)}
            </Wrap>
        </Layout>        
    )
}

export default ProfessionalServices;