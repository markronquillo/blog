import React, { Component } from 'react';
import styled from 'styled-components';

/**
 * A flex wrapper container
 * add props for flex direction 
 * and justify content 
 */
const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row' };
  justify-content: ${props => props.spaceBetween ? 'space-between' : 'row' };
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
`

export default Container;
