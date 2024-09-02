namespace EDiary.Models
{
    public class NoteModel
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public string Content { get; set; }

        public DateTime Created { get; set; } 
        public DateTime Updated { get; set; } = DateTime.Now;
    }
}
