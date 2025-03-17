import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { IProfile } from "@/types";
  
  interface UserDetailsModalProps {
    user: IProfile;
    isOpen: boolean;
    onClose: () => void;
  }
  
  const UserDetailsModal: React.FC<UserDetailsModalProps> = ({
    user,
    isOpen,
    onClose,
  }) => {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-lg sm:rounded-lg bg-white p-6 shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-gray-900">
              User Details
            </DialogTitle>
          </DialogHeader>
  
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="text-gray-800 font-medium">
                <strong>Name:</strong> {user.name}
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> {user.phone || "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Role:</strong> {user.role}
              </p>
              <p className="text-gray-600">
                <strong>Status:</strong> {user.isVerified ? "Verified" : "Not Verified"}
              </p>
              <p className="text-gray-600">
                <strong>Blocked:</strong> {user.isBlocked ? "Yes" : "No"}
              </p>
            </div>
  
            {user.address && (
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <p className="text-gray-800 font-medium">
                  <strong>Address:</strong>
                </p>
                <p className="text-gray-600">
                  {user.address.street}, {user.address.city}, {user.address.state}, {user.address.zip}, {user.address.country}
                </p>
              </div>
            )}
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="text-gray-600">
                <strong>Account Created At:</strong> {new Date(user.createdAt || "").toLocaleString()}
              </p>
              <p className="text-gray-600">
                <strong>Account Updated At:</strong> {new Date(user.updatedAt || "").toLocaleString()}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default UserDetailsModal;
  