import React, { FC } from 'react'

// common styled
import { Button } from '../../common/Button/styled'
import { Text, Title } from '../../common/Text/styled'

// styled
import { InformationButton, InformationTextBlock } from './styled'

const InformationText: FC = () => {
  return (
    <InformationTextBlock>
      <Title>galaxy trucking</Title>
      <Text>Countries of the Republic, as well as Tatooine and separatist planet with all documents.</Text>
      <InformationButton>
        <Button>Details</Button>
      </InformationButton>
    </InformationTextBlock>
  )
}

export default InformationText
