import React from "react";
import styled from "@emotion/styled";
import ProjectsItem from "./ProjectsItem";
import useProjects from "../../hooks/use-projects";


const Section = styled.div`
    display: flex;
    justify-content: center;
`;

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction:column;
    margin-top: 20px;
`

const ProjectsHeader = styled.div`
    width: 100%;
`;

const ProjectsTitle = styled.h1`
    color: ${props => props.theme.text};
    font-weight: 900;
    line-height: 1;
    text-align: left;
    margin-bottom: 4rem;
    padding-bottom: 12px;
    border-bottom: 1px solid #777;
    width: 100%;
`;

const ProjectsDescription = styled.p`
    color: ${props => props.theme.text};
    font-weight: 400;
    line-height: 1.75;
    text-align: left;
    margin: -3rem 0 2rem;
    display: flex;
    flex-direction:column;
    font-size: 1.4rem;
`;

const ProjectsSectionContainer = styled.div`
    padding: 15px 0;
    width: 100%;
`;


function ProjectsLanding() {
  const projects = useProjects();
  return (
    <Section>
      <ProjectsContainer>
        <ProjectsHeader>
          <ProjectsTitle>
            Projects
        </ProjectsTitle>
          <ProjectsDescription>
            Listed below are projects (not under NDA) that I am working on, have worked on, gave up on, and a backlog of ideas to explore.
        </ProjectsDescription>
        </ProjectsHeader>

        <ProjectsSectionContainer>
          <ProjectsTitle>
            🚢 Active, Ongoing Projects
        </ProjectsTitle>
          <ProjectsDescription>
            Projects that I am actively working on or doing research in.
        </ProjectsDescription>
          {
            projects.filter(project => project.type === 'active').reverse().map((project, i) => <ProjectsItem props={project} key={i} />)
          }
        </ProjectsSectionContainer>

        <ProjectsSectionContainer>
          <ProjectsTitle>
            💡 Idea, Seed Stage Projects
        </ProjectsTitle>
          <ProjectsDescription>
            Ideas or seed stage projects that have been on my mind.
          </ProjectsDescription>
          {
            projects.filter(project => project.type === 'idea').reverse().map((project, i) => <ProjectsItem props={project} key={i} />)
          }
        </ProjectsSectionContainer>

        <ProjectsSectionContainer>
          <ProjectsTitle>
            ⚰️ Inactive, Dead Projects
        </ProjectsTitle>
          <ProjectsDescription>
            Projects that are no longer updated. Once upon a time active or never completed.
        </ProjectsDescription>
          {
            projects.filter(project => project.type === 'inactive').reverse().map((project, i) => <ProjectsItem props={project} key={i} />)
          }
        </ProjectsSectionContainer>
      </ProjectsContainer>
    </Section>
  )
}

export default ProjectsLanding;