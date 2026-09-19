"use client"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="flex min-h-48 items-center justify-center rounded-xl border border-dashed border-surface-border-subtle px-4 text-center text-sm text-copy-muted">
      {label}
    </div>
  )
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      className={`fixed inset-y-18 left-4 z-30 flex w-80 flex-col rounded-2xl border border-surface-border bg-bg-surface/95 p-4 shadow-2xl backdrop-blur-sm transition-transform duration-200 ${
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1rem)]"
      }`}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-base font-medium text-copy-primary">
          Projects
        </h2>
        <Button aria-label="Close projects sidebar" onClick={onClose} size="icon-sm" variant="ghost">
          <X />
        </Button>
      </div>

      <Tabs className="mt-4 flex-1" defaultValue="my-projects">
        <TabsList className="w-full">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent className="mt-4" value="my-projects">
          <EmptyState label="No projects yet" />
        </TabsContent>
        <TabsContent className="mt-4" value="shared">
          <EmptyState label="No shared projects yet" />
        </TabsContent>
      </Tabs>

      <Button className="mt-4 w-full" variant="default">
        <Plus />
        New Project
      </Button>
    </aside>
  )
}
