namespace ApplicationTracker.Dto
{
    public class UserDto
    {
        public int Id { get; set; }

        public string Email { get; set; } = null!;

        public string? Password { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public int TempToken { get; set; }

        public bool IsVerified { get; set; }

        public DateTime AddedOn { get; set; }

        public DateTime? LastUpdatedOn { get; set; }
    }
}
