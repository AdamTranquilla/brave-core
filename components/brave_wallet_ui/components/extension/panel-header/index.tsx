import * as React from 'react'

import { SearchBar } from '../../shared'

// Styled Components
import {
  HeaderTitle,
  HeaderWrapper,
  TopRow,
  CloseButton
} from './style'
import locale from '../../../mock-data/mock-locale'
import { PanelTypes } from '../../../constants/types'

export interface Props {
  title: string
  action: (path: PanelTypes) => void
  useSearch?: boolean | undefined
  searchAction?: (event: any) => void | undefined
}

export default class PanelHeader extends React.PureComponent<Props> {

  navigate = (path: PanelTypes) => () => {
    this.props.action(path)
  }

  render () {
    const { title, searchAction, useSearch } = this.props
    return (
      <HeaderWrapper>
        <TopRow>
          <HeaderTitle>{title}</HeaderTitle>
          <CloseButton onClick={this.navigate('main')} />
        </TopRow>
        {useSearch &&
          <SearchBar
            placeholder={locale.searchText}
            action={searchAction}
          />
        }
      </HeaderWrapper>
    )
  }
}
