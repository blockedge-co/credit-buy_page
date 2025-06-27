
"use client"

import { CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string;
  name: string;
  location: string;
  country: string;
  impact: string;
  certification: string;
}

interface ProjectSelectionProps {
  selectedProject: string;
  setSelectedProject: (projectId: string) => void;
  projects: Project[];
  isLoaded: boolean;
}

export function ProjectSelection({
  selectedProject,
  setSelectedProject,
  projects,
  isLoaded,
}: ProjectSelectionProps) {
  return (
    <Card
      className={`p-6 border-0 shadow-lg transition-all duration-700 ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ animationDelay: "300ms" }}
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Select Project</h2>

      <Select value={selectedProject} onValueChange={setSelectedProject}>
        <SelectTrigger className="w-full mb-4">
          <SelectValue placeholder="Select a project" />
        </SelectTrigger>
        <SelectContent>
          {projects.map((project) => (
            <SelectItem key={project.id} value={project.id}>
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{project.country}</span>
                    <div>
                      <div className="font-medium text-gray-900">{project.name}</div>
                      <div className="text-sm text-gray-500">{project.location}</div>
                    </div>
                  </div>
                  {selectedProject === project.id && <CheckCircle className="h-5 w-5 text-emerald-600" />}
                </div>
                <div className="flex items-center justify-between w-full mt-2">
                  <Badge variant="outline" className="text-emerald-700 border-emerald-200">
                    {project.certification}
                  </Badge>
                  <span className="text-sm font-medium text-emerald-600">{project.impact}</span>
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Card>
  )
}
