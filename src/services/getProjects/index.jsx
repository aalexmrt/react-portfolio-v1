import supabase from "../getSupabase"

const fromApiResponseToProjects = (apiResponse) => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const projects = data.map(item => {
      const { name, description, img_url: imgRef, git_url: gitUrl } = item
      return { name, description, imgRef, gitUrl }
    })
    return projects
  }
  return []
}

const getProjects = () => {
  return supabase.from("react-portfolio").select().order("id", { ascending: true }).then(response => fromApiResponseToProjects(response))
}

export default getProjects
