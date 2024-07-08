namespace ApplicationTracker.Data
{
    public partial class User
    {
        public int Id { get; set; }

        public string Email { get; set; } = null!;

        public string Password { get; set; } = null!;

        public string FirstName { get; set; } = null!;

        public string? LastName { get; set; }

        public string? TempToken { get; set; }

        public bool IsVerified { get; set; }

        public DateTime AddedOn { get; set; }

        public DateTime? LastUpdatedOn { get; set; }
    }
}
