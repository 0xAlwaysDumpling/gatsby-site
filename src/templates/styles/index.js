import styled from "@emotion/styled";

export const Section = styled.div`
    display: flex;
    flex-direction:column;
    position: relative;
    margin: 0 auto;
    padding: 0rem 1rem;
    max-width: 1100px;
`;

export const PostContainer = styled.div`
    margin-top: 20px;
`;

export const Title = styled.h2`
    color: ${props => props.theme.text};
    font-weight: 900;
    line-height: 1;
    text-align: left;
    padding-bottom: 12px;
    border-bottom: 1px solid #777;
    width: 100%;
`;
export const Author = styled.h3``;

export const OneLiner = styled.p`
    color: ${props => props.theme.text};
    font-weight: 400;
    line-height: 1.75;
    text-align: left;
    margin: -3rem 0 2rem;
    display: flex;
    flex-direction:column;
    font-style: italic;
`;

export const TagsContainer = styled.h4`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    line-height: 1;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-family: inherit;
    margin-top: 0;
    margin-bottom: 1rem;
`;

export const DescriptionContainer = styled.div`
    color: ${props => props.theme.text};
    line-height: 2.5rem;
    white-space: pre-wrap;
    pre {
        white-space: pre-wrap;
    }
`;