import styled from '@emotion/styled';
import darkTheme from '@layouts/Theme/theme';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 38px);
  flex-flow: column;
  position: relative;
`;

export const Header = styled.header`
  height: 64px;
  color: ${darkTheme.textColorBold};
  background: ${darkTheme.contentColor};
  border-top: 1px solid ${darkTheme.lineColor};
  border-bottom: 1px solid ${darkTheme.lineColor};
  border-left: 1px solid ${darkTheme.lineColor};
  display: flex;
  width: 100%;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 1px 0 var(--saf-0);
  padding: 20px 16px 20px 20px;
  font-weight: bold;
  align-items: center;

  & img {
    margin-right: 5px;
  }
`;
