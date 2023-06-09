import * as React from 'react'
import {Section} from 'types'

import {isLifestyle} from '../utils/brand'
import Container from './Container'
import MoreStories from './MoreStories'
import {Seo} from './Seo'
import Title, {TitleLifeStyle} from './Title'

const isLifestyleBrand = () => isLifestyle()

export default function SectionPage({section}: {section: Section}) {
  const {name, articles} = section || {}

  if (isLifestyleBrand()) {
    return (
      <Container>
        <TitleLifeStyle>{name}</TitleLifeStyle>
        <MoreStories articles={articles || []} />
      </Container>
    )
  }

  return (
    <Container>
      <Seo doc={section} />
      <div className="">
        <div className="m-auto max-w-5xl p-4 md:p-5 lg:p-6">
          <Title>{name}</Title>
        </div>
        {articles && articles?.length > 0 && (
          <MoreStories articles={articles} />
        )}
      </div>
    </Container>
  )
}
