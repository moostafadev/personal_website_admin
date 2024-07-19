"use server";

import { IProject } from "@/interfaces/project";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProjectsAction = async () => {
  return prisma.project.findMany();
};

export const getAllProjectsPaginatedAction = async ({
  skip,
  take,
}: {
  skip?: number;
  take?: number;
}) => {
  return prisma.project.findMany({
    skip,
    take,
  });
};

export const getOneProjectAction = async ({ id }: { id: string }) =>
  prisma.project.findMany({
    where: {
      id,
    },
  });

export const createProjectAction = async ({ data }: { data: IProject }) =>
  prisma.project.create({
    data,
  });

export const updateProjectAction = async ({
  data,
  id,
}: {
  data: IProject;
  id: string;
}) =>
  prisma.project.update({
    data,
    where: {
      id,
    },
  });

export const deleteProjectAction = async ({ id }: { id: string }) =>
  prisma.project.delete({
    where: {
      id,
    },
  });
