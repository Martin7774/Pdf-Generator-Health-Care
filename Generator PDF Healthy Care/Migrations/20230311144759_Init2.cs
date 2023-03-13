using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Generator_PDF_Healthy_Care.Migrations
{
    /// <inheritdoc />
    public partial class Init2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Disease_Patients_PatientId",
                table: "Disease");

            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Doctor_DoctorId",
                table: "Patients");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Doctor",
                table: "Doctor");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Disease",
                table: "Disease");

            migrationBuilder.RenameTable(
                name: "Doctor",
                newName: "Doctors");

            migrationBuilder.RenameTable(
                name: "Disease",
                newName: "Diseases");

            migrationBuilder.RenameIndex(
                name: "IX_Disease_PatientId",
                table: "Diseases",
                newName: "IX_Diseases_PatientId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Doctors",
                table: "Doctors",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Diseases",
                table: "Diseases",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Diseases_Patients_PatientId",
                table: "Diseases",
                column: "PatientId",
                principalTable: "Patients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Doctors_DoctorId",
                table: "Patients",
                column: "DoctorId",
                principalTable: "Doctors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Diseases_Patients_PatientId",
                table: "Diseases");

            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Doctors_DoctorId",
                table: "Patients");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Doctors",
                table: "Doctors");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Diseases",
                table: "Diseases");

            migrationBuilder.RenameTable(
                name: "Doctors",
                newName: "Doctor");

            migrationBuilder.RenameTable(
                name: "Diseases",
                newName: "Disease");

            migrationBuilder.RenameIndex(
                name: "IX_Diseases_PatientId",
                table: "Disease",
                newName: "IX_Disease_PatientId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Doctor",
                table: "Doctor",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Disease",
                table: "Disease",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Disease_Patients_PatientId",
                table: "Disease",
                column: "PatientId",
                principalTable: "Patients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Doctor_DoctorId",
                table: "Patients",
                column: "DoctorId",
                principalTable: "Doctor",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
