import React from 'react'
import Link from 'gatsby-link'
import SectionTitle from '../components/section_title'
import ContentSummary from '../components/content_summary'
import Container from '../components/container'

const IndexPage = () => (
  <div className="Page"> 
    <SectionTitle>Blogs</SectionTitle>
    <Container column className="Blogs">
      <ContentSummary className="summary">
        <h3 className="title"> Different ways to implement reducers in redux </h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non urna ut nisi lacinia condimentum. Ut hendrerit vehicula odio ac tincidunt. Duis blandit rutrum luctus. Nullam imperdiet lacus eu felis placerat commodo. In sit amet cursus urna, ut congue dolor. Pellentesque elementum, nunc quis rhoncus feugiat, nisl nisi ornare tortor, vel eleifend elit neque at purus. Donec at massa vitae sem efficitur semper. Suspendisse potenti. Aliquam euismod auctor orci et pulvinar. Praesent fringilla venenatis est eu consequat. Sed facilisis convallis lacus, in luctus nibh rutrum eu. Quisque non iaculis urna. Mauris ultricies dolor eu felis sagittis vulputate. 
      </ContentSummary>

      <ContentSummary className="summary">
        <h3 className="title"> Different ways to implement reducers in redux </h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non urna ut nisi lacinia condimentum. Ut hendrerit vehicula odio ac tincidunt. Duis blandit rutrum luctus. Nullam imperdiet lacus eu felis placerat commodo. In sit amet cursus urna, ut congue dolor. Pellentesque elementum, nunc quis rhoncus feugiat, nisl nisi ornare tortor, vel eleifend elit neque at purus. Donec at massa vitae sem efficitur semper. Suspendisse potenti. Aliquam euismod auctor orci et pulvinar. Praesent fringilla venenatis est eu consequat. Sed facilisis convallis lacus, in luctus nibh rutrum eu. Quisque non iaculis urna. Mauris ultricies dolor eu felis sagittis vulputate. 
      </ContentSummary>
    </Container>
  </div>
)

export default IndexPage
