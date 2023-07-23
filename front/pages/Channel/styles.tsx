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
  display: flex;
  width: 100%;
  color: ${darkTheme.textColorBold};
  background: ${darkTheme.contentColor};
  border-top: 1px solid ${darkTheme.lineColor};
  border-bottom: 1px solid ${darkTheme.lineColor};
  border-left: 1px solid ${darkTheme.lineColor};
  box-shadow: 0 1px 0 var(--saf-0);
  padding: 20px 16px 20px 20px;
  font-weight: bold;
  align-items: center;
`;

export const DragOver = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100% - 64px);
  background: white;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`;
